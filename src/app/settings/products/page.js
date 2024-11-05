import BackButton from "@/components/BackButton"
import Link from "next/link"

const page = () => {
    return (
        <main className="content__area">
            <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
                <BackButton />  
                <Link href={"/settings/products/create"} className="btn btn-primary">Create</Link>
            </div>
        </main>
    )
}

export default page