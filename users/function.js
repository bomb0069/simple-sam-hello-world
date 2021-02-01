
exports.getAllUsers = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify([
                {
                  "id": 1,
                  "name": "Leanne Graham",
                  "username": "Bret",
                  "email": "Sincere@april.biz",
                  "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                      "lat": "-37.3159",
                      "lng": "81.1496"
                    }
                  },
                  "phone": "1-770-736-8031 x56442",
                  "website": "hildegard.org",
                  "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                  }
                },
                {
                  "id": 2,
                  "name": "Ervin Howell",
                  "username": "Antonette",
                  "email": "Shanna@melissa.tv",
                  "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                      "lat": "-43.9509",
                      "lng": "-34.4618"
                    }
                  },
                  "phone": "010-692-6593 x09125",
                  "website": "anastasia.net",
                  "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                  }
                }
            ])
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

exports.getUser = async (event, context) => {
    try {
        if (event.pathParameters.id ===  '1')
        {
            response = {
                'statusCode': 200,
                'body': JSON.stringify(
                    {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                    }
                )
            }
        } else {
            response = {
                'statusCode': 404,
                'body': JSON.stringify(
                    {
                        "error-code": "USER000001",
                        "error-message": "User Not Found"
                    }
                )
            }
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};


exports.createUser = async (event, context) => {
    try {
        response = {
            'statusCode': 201,
            'body': event.body
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};