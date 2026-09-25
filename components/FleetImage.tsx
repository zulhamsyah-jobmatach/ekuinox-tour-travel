// Menampilkan foto armada.
// Foto asli tersimpan di /public/img/ (bus-kiffah.jpg, van.jpg, mpv.jpg).

export default function FleetImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}
