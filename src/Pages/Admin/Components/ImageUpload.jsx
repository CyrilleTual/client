import React from 'react'

function ImageUpload() {

    const [selectedFile, setSelectedFile] = React.useState();
    const [preview, setPreview] = React.useState();

    // create a preview as a side effect, whenever selected file is changed
    React.useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }

      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined);
        return;
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0]);
    };

  return (
    <>
        <label htmlFor="img"> Photos </label>
        <input type="file" id="img" name="img" onChange={onSelectFile} />
        {selectedFile && <img src={preview} />}
    </>
     
  );
}

export default ImageUpload 