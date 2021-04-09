module.exports = {
  // parameters for all operations in this path
  parameters: [
    {
      name: 'id',
      in: 'path',
      type: 'string',
      required: true,
      description: "Fred's age.",
    },
  ],
  // method handlers may just be the method handler...
  get: get,
  // or they may also be an array of middleware + the method handler.  This allows
  // for flexible middleware management.  express-openapi middleware generated from
  // the <path>.parameters + <methodHandler>.apiDoc.parameters is prepended to this
  // array.
  post: [
    function (req, res, next) {
      next();
    },
    post,
  ],
};

function post(req, res) {
  res.status(200).json({ id: req.params.id });
}

// verify that apiDoc is available with middleware
post.apiDoc = {
  description: 'Create a user.',
  operationId: 'createUser',
  tags: ['users'],
  parameters: [
    {
      name: 'user',
      in: 'body',
      schema: {
        $ref: '#/definitions/User',
      },
    },
  ],

  responses: {
    default: {
      description: 'Unexpected error',
      schema: {
        $ref: '#/definitions/Error',
      },
    },
  },
};

function get(req, res) {
  res.status(200).json({
    id: req.params.id,
    name: req.query.name,
    age: req.query.age,
  });
}

get.apiDoc = {
  description: 'Retrieve a user.',
  operationId: 'getUser',
  tags: ['users'],
  parameters: [
    {
      name: 'name',
      in: 'query',
      type: 'string',
      pattern: '^fred$',
      description: 'The name of this person.  It may only be "fred".',
    },
    // showing that operation parameters override path parameters
    {
      name: 'id',
      in: 'path',
      type: 'integer',
      required: true,
      description: "Fred's age.",
    },
    {
      name: 'age',
      in: 'query',
      type: 'integer',
      description: "Fred's age.",
      default: 80,
    },
  ],

  responses: {
    200: {
      description: 'Requested user',
      schema: {
        $ref: '#/definitions/User',
      },
    },

    default: {
      description: 'Unexpected error',
      schema: {
        $ref: '#/definitions/Error',
      },
    },
  },
};
