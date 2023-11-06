<!-- @format -->

# File upload with Multer and Express

The purpose of this project is to show how to upload files with Multer and Express using functions.

In this project we create two function for single and multiple file upload named `singleUpload` and `multiUpload` respectively at `middleware/multerUpload.js` file.

## Description

This is a simple example of how to upload files with Multer and Express.

```bash
Single and multiple file upload process is shown in this project.
```

## Getting Started

### Dependencies

- Node.js
- Express
- Multer

### Installing

- Clone the repository
- Run `npm install` to install the dependencies

`You can check and edit the code according to your needs.`

### Executing program

- Run `npm run dev` to start the server

`Note: The server will start on port 3000 by default. and nodemon is required to run the server.`

/**_ Install nodemon globally if you don't have it installed. _**/

### Nodemon global installation

```bash
npm install -g nodemon
```

## Api Endpoints

- `POST /upload` - Upload a single file

- `POST /uploadMultiple` - Upload multiple files

`Note: The form field name of file should be 'image'.` <br>
`form type: multipart/form-data`

## Help

If you have any questions or comments.
Don't forget to star the repository if you like it.
and contribute to the project if you want to improve it.
