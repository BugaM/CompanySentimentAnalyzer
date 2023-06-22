/**
 * @generated SignedSource<<376f71a0e44861a271780c185c647819>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DashboardQuery$variables = {};
export type DashboardQuery$data = {
  readonly twitterPosts: ReadonlyArray<{
    readonly author: string;
    readonly content: string;
    readonly date: string;
    readonly likes: string;
    readonly query: string;
  }>;
};
export type DashboardQuery = {
  response: DashboardQuery$data;
  variables: DashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TwitterPost",
    "kind": "LinkedField",
    "name": "twitterPosts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "author",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "likes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "query",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c9a3313ffc0e0f0fe04eade4ea76c227",
    "id": null,
    "metadata": {},
    "name": "DashboardQuery",
    "operationKind": "query",
    "text": "query DashboardQuery {\n  twitterPosts {\n    author\n    content\n    date\n    likes\n    query\n  }\n}\n"
  }
};
})();

(node as any).hash = "d58d3a5b8011bdb0738a172f3df0047b";

export default node;
