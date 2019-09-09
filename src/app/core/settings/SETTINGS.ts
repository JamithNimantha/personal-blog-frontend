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
    }
  };
}
