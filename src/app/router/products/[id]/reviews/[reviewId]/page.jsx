import { notFound } from 'next/navigation'
export default function Home({ params }) {
  if (params.reviewId > 100) {
    notFound()
  }
  return (
    <>
      <h1>

        Review[id] : {params.reviewId} for
        Productd [id] : {params.id}
      </h1>
    </>
  );
}
