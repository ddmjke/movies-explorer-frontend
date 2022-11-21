export default function MoviesCardList(props) {
  return (
    <>
      <section className="moviescardlist">
        {props.children}
      </section>
      {
        props.hasMore && <button className="moviescardlist__load-button" onClick={props.onMore}>Ещё</button>
      }
    </>
  )
}