export class SETTINGS {
  public static HTTP_PREFIX = 'http://localhost:8080';
  public static ENDPOINTS = {
    // IMAGE ENDPOINT
    uploadImage: {
      url: SETTINGS.HTTP_PREFIX + '/api/upload-file',
      type: 'POST'
    },
    // ADMIN POST ENDPOINT
    createPost: {
      url: SETTINGS.HTTP_PREFIX + '/api/post/create-post',
      type: 'POST'
    },
    getAllPosts: {
      url: SETTINGS.HTTP_PREFIX + '/api/post/get-all-post',
      type: 'GET'
    },
    getDetails: {
      url: SETTINGS.HTTP_PREFIX + '/api/detail',
      type: 'GET'
    },
    updateDetail: {
      url: SETTINGS.HTTP_PREFIX + '/api/detail',
      type: 'PUT'
    },
    changePostStatus: {
      url: SETTINGS.HTTP_PREFIX + '/api/post/change-status/',
      type: 'GET'
    },
    deletePost: {
      url: SETTINGS.HTTP_PREFIX + '/api/post/',
      type: 'DELETE'
    },
    // PUBLIC ENDPOINTS
    getAllPublicPosts: {
      url: SETTINGS.HTTP_PREFIX + '/api/post/all-posts',
      type: 'GET'
    },
    getSinglePost: {
      url: SETTINGS.HTTP_PREFIX + '/api/post/',
      type: 'GET'
    },
    // COMMENT
    saveComment: {
      url: SETTINGS.HTTP_PREFIX + '/api/comment',
      type: 'POST'
    },
    getComment: {
      url: SETTINGS.HTTP_PREFIX + '/api/comment/',
      type: 'GET'
    }
  };
}
