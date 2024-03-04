const aws = require('aws-sdk')
const {BUCKET,awsConfig} = require('../util/aws')

awsConfig()

const s3 = new aws.S3();

exports.add = async(filename)=>{
    let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
    let x = r.Contents.map(item => item.Key);
    let file = false;
    if(x.indexOf(filename) == -1)
    {
        file = true;
    }
    if(file)
    {
        s3.putObject({Bucket: BUCKET,Key: filename}, (err, data) => {
            if (err) {
                 file = false;
            } 
          });
    }
    return file;
}

exports.view = async()=>{
    let r = await s3.listObjectsV2({ Bucket: BUCKET}).promise();
    let x = r.Contents.map(item => item.Key);
    return x;
}

exports.get = async(filename)=>{
    //getObject
   const data = await s3.listObjectsV2({
        Bucket: BUCKET,
        Prefix: filename
      }).promise();
      if(data.Contents.length-1)
      {
        return data.Contents;
      }
      else {
         return 0
      };
}

exports.del = async(filename)=>{
    let r = await s3.listObjectsV2({ Bucket: BUCKET}).promise();
    let x = r.Contents.map(item => item.Key);
    if(!x.length)
    {
       return false
    }
    if(x.indexOf(filename) == -1)
    {
        return false
    }
    try {
        const data = await s3.listObjectsV2({ Bucket: BUCKET, Prefix: filename }).promise();
        if (data.Contents.length === 0) {
          console.log('No files found in the specified folder.');
          return false; // No files found, return false indicating no deletion was performed
        }
    
        const objectsToDelete = data.Contents.map((file) => ({ Key: file.Key }));
    
        await s3.deleteObjects({
          Bucket: BUCKET,
          Delete: {
            Objects: objectsToDelete,
            Quiet: false,
          },
        }).promise();
    
        console.log('Folder and its contents deleted successfully.');
        return true; // Deletion successful, return true
      } catch (err) {
        console.error('Error:', err);
        return false; // Return false indicating an error occurred during deletion
      }   
}

exports.delFile = async(file)=>{
  const params = {
    Bucket: BUCKET,
    Key: file
  };
  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted successfully:', data);
    }
  });
}

exports.createFolder = async(name)=>{
    const params = {
        Bucket: BUCKET,
        Key: name
      };

s3.putObject(params, function(err, data) {
    if (err) {
      console.error("Error creating folder: ", err);
    } else {
      console.log("Folder created successfully.");
    }
  });
}

exports.deleteFolder = async(name)=>{

const params = {
    Bucket: BUCKET,
    Delete: {
      Objects: [
        {
          Key: name,
        },
      ],
      Quiet: false, 
    },
  };
  
  s3.deleteObjects(params, (err, data) => {
    if (err) {
      console.log('Error deleting folder:', err);
    } else {
      console.log('Successfully deleted folder:', data);
    }
  });
}

exports.download = async(file)=>{
  
  try {
    const bucketName = BUCKET;
    const key = file; 

   
    const signedUrl = await s3.getSignedUrlPromise('getObject', {
      Bucket: bucketName,
      Key: key,
      Expires: 3600 
    });
  
    return signedUrl;
  } catch (error) {
    console.error('Error:', error);
   return null;
  }


}