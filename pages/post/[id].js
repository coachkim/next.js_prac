import { useRouter } from "next/router"

function Post() {
    const router = useRouter();
    const { id } = router.query;
  return (
    <div>
      Post : {id}
    </div>
  )
}

export default Post
