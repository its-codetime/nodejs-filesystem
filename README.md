# link

Nodejs file system Task https://docs.google.com/document/d/1c_u6azHv7AQHse45GGcrCRe78liwv90S5aHwBR7tBP0/edit

# endpoints

GET /files - list all files
GET /files/file/filename - list file contents
POST /files/create/filename - create new file (body: {content: "content"})
PUT /files/rename/filename - rename file (body: {new_filename: "new_filename"})
PUT /files/update/filename - update file contents (body: {content: "content", action: "append|replace"})
DELETE /files/delete/filename - delete file
