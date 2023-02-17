import Dropzone from "react-dropzone";
import React from 'react'

const uploadImage = () => {
  return (
      <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) =>
              setFieldValue("picture", acceptedFiles[0])
          }
      >
          {({ getRootProps, getInputProps }) => (
              <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  sx={{ "&:hover": { cursor: "pointer" } }}
              >
                  <input {...getInputProps()} />
                  {!values.picture ? (
                      <p>Add Picture Here</p>
                  ) : (
                      <FlexBetween>
                          <Typography>{values.picture.name}</Typography>
                          <EditOutlinedIcon />
                      </FlexBetween>
                  )}
              </Box>
          )}
      </Dropzone>
  )
}

export default uploadImage
