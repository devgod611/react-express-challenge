import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: Scalars['Boolean'];
  login: LoginResponse;
  revokeUserSession: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  addArticle: Article;
  updateArticle: Article;
  deleteArticle: Scalars['Boolean'];
};


export type MutationSignupArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRevokeUserSessionArgs = {
  userId: Scalars['String'];
};


export type MutationAddArticleArgs = {
  content: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  articleId: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteArticleArgs = {
  articleId: Scalars['String'];
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  created_by: User;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  listArticles: Array<Article>;
};


export type QueryListArticlesArgs = {
  orderBy?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  token_version: Scalars['Int'];
};

export type AddArticleMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type AddArticleMutation = (
  { __typename?: 'Mutation' }
  & { addArticle: (
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'created_at' | 'updated_at'>
    & { created_by: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username'>
    ) }
  ) }
);

export type DeleteArticleMutationVariables = Exact<{
  articleId: Scalars['String'];
}>;


export type DeleteArticleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteArticle'>
);

export type ListArticlesQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
}>;


export type ListArticlesQuery = (
  { __typename?: 'Query' }
  & { listArticles: Array<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'content' | 'title' | 'created_at' | 'updated_at'>
    & { created_by: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'access_token'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'token_version'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signup'>
);

export type UpdateArticleMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  articleId: Scalars['String'];
}>;


export type UpdateArticleMutation = (
  { __typename?: 'Mutation' }
  & { updateArticle: (
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'created_at' | 'updated_at'>
    & { created_by: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username'>
    ) }
  ) }
);


export const AddArticleDocument = gql`
    mutation AddArticle($title: String!, $content: String!) {
  addArticle(content: $content, title: $title) {
    id
    title
    content
    created_by {
      id
      email
      username
    }
    created_at
    updated_at
  }
}
    `;
export type AddArticleMutationFn = Apollo.MutationFunction<AddArticleMutation, AddArticleMutationVariables>;

/**
 * __useAddArticleMutation__
 *
 * To run a mutation, you first call `useAddArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArticleMutation, { data, loading, error }] = useAddArticleMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddArticleMutation(baseOptions?: Apollo.MutationHookOptions<AddArticleMutation, AddArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddArticleMutation, AddArticleMutationVariables>(AddArticleDocument, options);
      }
export type AddArticleMutationHookResult = ReturnType<typeof useAddArticleMutation>;
export type AddArticleMutationResult = Apollo.MutationResult<AddArticleMutation>;
export type AddArticleMutationOptions = Apollo.BaseMutationOptions<AddArticleMutation, AddArticleMutationVariables>;
export const DeleteArticleDocument = gql`
    mutation DeleteArticle($articleId: String!) {
  deleteArticle(articleId: $articleId)
}
    `;
export type DeleteArticleMutationFn = Apollo.MutationFunction<DeleteArticleMutation, DeleteArticleMutationVariables>;

/**
 * __useDeleteArticleMutation__
 *
 * To run a mutation, you first call `useDeleteArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArticleMutation, { data, loading, error }] = useDeleteArticleMutation({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useDeleteArticleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArticleMutation, DeleteArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArticleMutation, DeleteArticleMutationVariables>(DeleteArticleDocument, options);
      }
export type DeleteArticleMutationHookResult = ReturnType<typeof useDeleteArticleMutation>;
export type DeleteArticleMutationResult = Apollo.MutationResult<DeleteArticleMutation>;
export type DeleteArticleMutationOptions = Apollo.BaseMutationOptions<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const ListArticlesDocument = gql`
    query ListArticles($search: String, $orderBy: String) {
  listArticles(search: $search, orderBy: $orderBy) {
    id
    content
    title
    created_by {
      id
      username
      email
    }
    created_at
    updated_at
  }
}
    `;

/**
 * __useListArticlesQuery__
 *
 * To run a query within a React component, call `useListArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListArticlesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useListArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ListArticlesQuery, ListArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListArticlesQuery, ListArticlesQueryVariables>(ListArticlesDocument, options);
      }
export function useListArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListArticlesQuery, ListArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListArticlesQuery, ListArticlesQueryVariables>(ListArticlesDocument, options);
        }
export type ListArticlesQueryHookResult = ReturnType<typeof useListArticlesQuery>;
export type ListArticlesLazyQueryHookResult = ReturnType<typeof useListArticlesLazyQuery>;
export type ListArticlesQueryResult = Apollo.QueryResult<ListArticlesQuery, ListArticlesQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    token_version
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!) {
  signup(email: $email, password: $password)
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpdateArticleDocument = gql`
    mutation UpdateArticle($title: String!, $content: String!, $articleId: String!) {
  updateArticle(content: $content, title: $title, articleId: $articleId) {
    id
    title
    content
    created_by {
      id
      email
      username
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateArticleMutationFn = Apollo.MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useUpdateArticleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArticleMutation, UpdateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
      }
export type UpdateArticleMutationHookResult = ReturnType<typeof useUpdateArticleMutation>;
export type UpdateArticleMutationResult = Apollo.MutationResult<UpdateArticleMutation>;
export type UpdateArticleMutationOptions = Apollo.BaseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>;