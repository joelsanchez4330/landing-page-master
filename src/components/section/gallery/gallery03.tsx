export function Gallery03({ images }: any) {
  return (
    <section className="py-12 bg-white overflow-hidden">
      {/* We use 'animate-scroll' which we just defined in tailwind.config */}
      <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] w-max px-6">
        {[...(images || []), ...(images || [])].map((img: any, i: number) => (
          <div key={i} className="w-[300px] md:w-[450px] shrink-0 aspect-[3/2] rounded-3xl overflow-hidden shadow-lg">
            <img src={img.url} className="w-full h-full object-cover" alt="Gallery Slide" />
          </div>
        ))}
      </div>
    </section>
  );
}