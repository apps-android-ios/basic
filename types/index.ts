export type RootParamList = {
  Home: {itemId?: number};
  Product: {itemId?: number; name?: string};
  CreatePost: undefined;
  Post: {postId: string};
  Account: {postId: string};
};
