import { defer } from "@shopify/remix-oxygen";

export async function loader() {
  return defer({});
}

export default function Component() {
  return null;
}

async function getAllBlogs() {
  const query = `
    {
        blogCollection(order:sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          description
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
    `;
  const response = await apiCall(query);
  const json = await response.json();
  return await json.data.blogCollection.items
}
