/* eslint-disable */
import * as Types from "../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace HelloModule {
  interface DefinedFields {
    Query: 'helloGQL';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      helloGQL?: gm.Middleware[];
    };
  };
}