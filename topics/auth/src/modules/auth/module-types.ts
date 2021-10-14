/* eslint-disable */
import * as Types from "../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace AuthModule {
  interface DefinedFields {
    Mutation: 'login';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      login?: gm.Middleware[];
    };
  };
}