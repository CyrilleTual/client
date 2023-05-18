import React  from 'react';

function Test() {

    const [values, setValues] = React.useState ({title:"", description:"", imgTitle:""}) 
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData(e.target);

      await fetch("http://localhost:9002/category/add", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("File upload failed");
          }
        })
        .then((data) => {
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
      
    }


  return (
    <>
      <form onSubmit={handleSubmit} method="POST "encType="multipart/form-data">

        <label htmlFor="title">titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="imgTitle">img Title</label>
        <input
          type="text"
          id="imgTitle"
          name="imgTitle"
          value={values.imgTitle}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="img"> Photos </label>
        <input type="file" id="img" name="img" />
        <br />

        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default Test