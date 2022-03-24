# nodejs file system module

## requirements

- create, read, update and delete files
- uses node 'fs' module for all operations

## endpoints

- GET /files - list all files
- GET /files/file/filename - list file contents
- POST /files/create/filename - create new file (body: {content: "content"})
- PUT /files/rename/filename - rename file (body: {new_filename: "new_filename"})
- PUT /files/update/filename - update file contents (body: {content: "content", action: "append|replace"})
- DELETE /files/delete/filename - delete file
