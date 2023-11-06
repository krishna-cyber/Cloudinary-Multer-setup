<!-- @format -->

# Managing and uploading files with Multer and Express

The purpose of this project is to show how to upload files with Multer and Express.

## Description

This is a simple example of how to upload files with Multer and Express.

In this project you have got several methods of using Multer to upload files.

1. Upload a single file
2. Upload multiple files
3. Upload a single file with validation
4. Upload multiple files with validation
5. Upload files to cloudinary

## Getting Started

### Dependencies

- Node.js
- Express
- Multer
- Cloudinary

### Installing

- Clone the repository
- Run `npm install` to install the dependencies

## Cloudinary setup

<b><u> Follow this steps in case you want to upload files to cloudinary </u> </b> <br>

<center> <i> otherwise skip this step <i></i></center>
<br>

- Create a free account on [Cloudinary](https://cloudinary.com/)
- Create a `.env` file in the root directory
- Add the following environment variables to the `.env` file

```bash
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
```

`CLOUD_NAME` is the name of your cloudinary account. You can find it in the dashboard of your cloudinary account.

`API_KEY` and `API_SECRET` are your cloudinary API credentials. You can find them in the dashboard of your cloudinary account.

### Selection of Projects

you have to select the project as you want to run the project.

1. Upload a single file
2. Upload multiple files
3. Upload a single file with validation
4. Upload multiple files with validation
5. Upload files to cloudinary

` Note: select the directory as per your requirement and run the project.`

### Executing program

- Run `npm run dev` to start the server

`Note: The server will start on port 3000 by default. and nodemon is required to run the server.`

`Note: Install nodemon globally if you don't have it installed.`

### Nodemon global installation

```bash
npm install -g nodemon
```

## Contribution

If you have any questions or comments.
Don't forget to star the repository if you like it.
and contribute to the project if you want to improve it.
