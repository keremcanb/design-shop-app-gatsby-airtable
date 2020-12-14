const airtableQuery = `
{
    allAirtable(filter: {table: {eq: "Projects"}}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }

`;

const pageToAlgoliaRecord = ({ id, data: { name, type, date, image } }) => ({
  objectID: id,
  name,
  type,
  date,
  image: { ...image.localFiles[0].childImageSharp.fluid }
});

const queries = [
  {
    query: airtableQuery,
    transformer: ({
      data: {
        allAirtable: { nodes }
      }
    }) => nodes.map(pageToAlgoliaRecord)
  }
];

module.exports = queries;
