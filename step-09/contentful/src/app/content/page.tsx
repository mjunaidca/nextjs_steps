import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function GetContent() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_KEY}&content_type=content`
  );

  if (!res.ok) {
    throw new Error("Failed to get content");
  }

  return res.json();
}

const Content = async () => {
  const blogs = await GetContent();
  console.log(blogs);
  return (
    <div>
      {blogs.items.map((item: any) => (
        <>
          <div>{item.fields.name}</div>
          <div>{documentToReactComponents(item.fields.description)}</div>
          <div></div>
          <br />
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default Content;
