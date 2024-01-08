import {client} from './config/elastic_search';

const elasticSearch = async (index: string) => {
  const isIndexExists: boolean = await client.indices.exists({index});
  console.log('- isIndexExists : ', isIndexExists);

  if (!isIndexExists) {
    const insertIndex = await client.index({
      index,
      id: 'test-index-2-id',
      document: {
        name: 'Zoro',
        description: 'ini bengkel test Robin',
        price: 2000,
        image: 'Zoro.com',
        category: 'Zoro',
        brand: 'Zoro Brandfm,asndfasdf',
      },
    });
    console.log('- insertIndex   : ', JSON.stringify(insertIndex));
  }

  const getIndex = await client.get({
    index: 'test-index-2',
    id: 'test-index-2-id',
  });

  console.log('- getIndex      :', JSON.stringify(getIndex));
  const body = await client.search({
    index: 'test-index-2',
    body: {
      query: {
        query_string: {
          query: '*robin*',
        },
      },
    },
  });

  console.log('- searchResult  :', JSON.stringify(body.hits.hits));
};

elasticSearch('test-index-2');
