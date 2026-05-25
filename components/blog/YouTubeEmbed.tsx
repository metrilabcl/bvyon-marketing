interface Props {
  id: string;
  title?: string;
}

export default function YouTubeEmbed({ id, title = "Video" }: Props) {
  return (
    <div className="my-8 aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
