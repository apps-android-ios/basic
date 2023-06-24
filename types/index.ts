export type RootParamList = {
  Home: {itemId?: number};
  FoodStore: {screen?: string};
  Product: {itemId?: number; name?: string};
  CreatePost: undefined;
  Post: {postId: string};
  Account: {postId: string};
};

export type FoodStoreParamList = {
  Items: undefined;
  Categories: undefined;
};

export type BottomTabsParamList = {
  Settings: undefined;
};
