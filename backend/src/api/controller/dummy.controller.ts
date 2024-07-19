/*
import { MongoClient } from 'mongodb';

//CON ESTO, PROCEDEMOS A FILTRAR LOS RESULTADOS
const agg = [
    {
      '$match': {
        'isActive': true, 
        'age': {
          '$gte': 40
        }
      }
    }, {
      '$count': 'num_cuarentones'
    }
  ];
  
  const client = await MongoClient.connect(
    'mongodb://armada:armadaPass@localhost:8101/'
  );
  const coll = client.db('armada').collection('dummy_fool');
  const cursor = coll.aggregate(agg);
  const result = await cursor.toArray();
  await client.close();
*/