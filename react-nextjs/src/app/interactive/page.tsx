function Button({ onClick, children }: { onClick: any; children: any }) {
  return <div onClick={onClick}>{children}</div>;
}

function Toolbar({
  onPlayMovie,
  onUploadImage,
}: {
  onPlayMovie: any;
  onUploadImage: any;
}) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Play Movie")}
      onUploadImage={() => alert("Upload Image")}
    />
  );
}
