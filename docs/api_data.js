define({ "api": [
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/count/unseen",
    "title": "to get count of unseen messages.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"unseen chat count found.\",\n  \"status\": 200,\n  \"data\": 5\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatCountUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/find/unseen",
    "title": "to get paginated unseen chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"chat found and listed.\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"seen\": false,\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"seen\": false,\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatFindUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/group",
    "title": "to get paginated chats of group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoom",
            "description": "<p>roomName of group. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n    \"error\": false,\n    \"message\": \"All Group Chats Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"senderName\": \"Deepak singh\",\n            \"senderId\": \"Zfu2gWJOd\",\n            \"message\": \"my name is pankj\",\n            \"chatRoom\": \"temp\",\n            \"seen\": false,\n            \"chatId\": \"I4e4jQBz1\",\n            \"createdOn\": \"2018-09-20T18:04:09.548Z\",\n            \"modifiedOn\": \"2018-09-20T18:04:11.618Z\"\n        },\n        {\n            \"senderName\": \"Deepak singh\",\n            \"senderId\": \"Zfu2gWJOd\",\n            \"message\": \"l\",\n            \"chatRoom\": \"temp\",\n            \"seen\": false,\n            \"chatId\": \"HfpzWPaYA\",\n            \"createdOn\": \"2018-09-20T18:04:20.932Z\",\n            \"modifiedOn\": \"2018-09-20T18:04:22.950Z\"\n        },\n        {\n            \"senderName\": \"pankaj singh\",\n            \"senderId\": \"-jzKDERxz\",\n            \"message\": \"kl\",\n            \"chatRoom\": \"temp\",\n            \"seen\": false,\n            \"chatId\": \"XkSvT-q8W\",\n            \"createdOn\": \"2018-09-20T18:04:27.761Z\",\n            \"modifiedOn\": \"2018-09-20T18:04:29.778Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n {\n          \"error\": true,\n          \"message\": \"No Chat Found\",\n          \"status\": 404,\n          \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForGroup"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/user",
    "title": "to get paginated chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId receiving user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForUser"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/unseen/user/list",
    "title": "to get user list of unseen chats.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatUnseenUserList"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "api for viewing single users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n            \"error\": false,\n            \"message\": \"User Details Found\",\n            \"status\": 200,\n            \"data\": {\n                \"userId\": \"-jzKDERxz\",\n                \"firstName\": \"pankaj\",\n                \"lastName\": \"singh\",\n                \"email\": \"pankajsaini982134@gmail.com\",\n                \"mobileNumber\": 123456789,\n                \"createdOn\": \"2018-09-04T06:45:30.000Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for viewing all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n                \"error\": false,\n                \"message\": \"All User Details Found\",\n                \"status\": 200,\n                \"data\": [\n                    {\n                        \"userId\": \"YkWh52D0e\",\n                        \"firstName\": \"pankaj\",\n                        \"lastName\": \"singh\",\n                        \"password\": \"$2b$10$4Er8XE8HwffEEsz2Wmx06O0IavU2NCUP0Q7.BNSrfSU4UykUXFg3i\",\n                        \"email\": \"abc@gmail.com\",\n                        \"mobileNumber\": 123456789,\n                        \"createdOn\": \"2018-09-03T14:34:28.000Z\"\n                    },\n                    {\n                        \"userId\": \"-jzKDERxz\",\n                        \"firstName\": \"pankaj\",\n                        \"lastName\": \"singh\",\n                        \"password\": \"$2b$10$pyieZrzZ5N9Mb7u8Eas1Pu.CxfXg9tM.8yilNvGDHHoN2tpcKS9OO\",\n                        \"email\": \"pankajsaini982134@gmail.com\",\n                        \"mobileNumber\": 123456789,\n                        \"createdOn\": \"2018-09-04T06:45:30.000Z\"\n                    }\n      \n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to find user details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n            \"error\": false,\n            \"message\": \"Login Successful\",\n            \"status\": 200,\n            \"data\": {\n                \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkN6R1ZZd1lscSIsImlhdCI6MTUzNzUxODM2MDAwNiwiZXhwIjoxNTM3NjA0NzYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6Ii1qektERVJ4eiIsImZpcnN0TmFtZSI6InBhbmthaiIsImxhc3ROYW1lIjoic2luZ2giLCJlbWFpbCI6InBhbmthanNhaW5pOTgyMTM0QGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6MTIzNDU2Nzg5fX0.IOm-Hvk9RFx4oBs0bDC5G3iw_db7k9Ol18zr8aurZtI\",\n                \"userDetails\": {\n                    \"userId\": \"-jzKDERxz\",\n                    \"firstName\": \"pankaj\",\n                    \"lastName\": \"singh\",\n                    \"email\": \"pankajsaini982134@gmail.com\",\n                    \"mobileNumber\": 123456789\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Wrong Password.Login Failed\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api for user logging out.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (route params) (required))</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n            \"error\": false,\n            \"message\": \"Logged Out Successfully\",\n            \"status\": 200,\n            \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Invalid Or Expired AuthorizationKey\",\n        \"status\": 404,\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/sendVerificationCode",
    "title": "api for sending verification code.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Verification Code sent to your mail\",\n   \"status\": 200,\n   \"data\": \"Success\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No user Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSendverificationcode"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n                \"error\": false,\n                \"message\": \"User created\",\n                \"status\": 200,\n                \"data\": {\n                    \"userId\": \"8cI1Shn7T\",\n                    \"firstName\": \"pankaj\",\n                    \"lastName\": \"singh\",\n                    \"email\": \"1123pankajsaini@gmail.com\",\n                    \"mobileNumber\": 123456789,\n                    \"createdOn\": \"2018-09-21T09:15:26.000Z\",\n                    \"_id\": \"5ba4b6ae03bb750fbd5520d9\",\n                    \"__v\": 0\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"One or More Parameter(s) is missing\",\n        \"status\": 400,\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "api for delete user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n            \"error\": false,\n            \"message\": \"Deleted the user successfully\",\n            \"status\": 200,\n            \"data\": {\n                \n            }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No user Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/forgot",
    "title": "api for forgot password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "veificationCode",
            "description": "<p>veificationCode of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n            \"error\": false,\n            \"message\": \"Password Updates Success\",\n            \"status\": 200,\n            \"data\": {\n                \"userId\": \"-jzKDERxz\",\n                \"firstName\": \"pankaj\",\n                \"lastName\": \"singh\",\n                \"email\": \"pankajsaini982134@gmail.com\",\n                \"mobileNumber\": 123456789,\n                \"createdOn\": \"2018-09-04T06:45:30.000Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No user Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersForgot"
  }
] });
