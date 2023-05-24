export interface Post {
  "_id": string,
  "title": string,
  "description": string,
  "profile": {
    "name": string,
  },
  "comments": [
    // {
    //   "_id": "string",
    //   "description": "string",
    //   "profile": "Unknown Type: Profile",
    //   "post": "Unknown Type: Post"
    // }
  ],
  "likes": string[],
  "image": boolean,

}