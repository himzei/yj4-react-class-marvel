import Layout from "../components/Layout";
import NotImage from "../assets/png/not-image.png"

export default function NotFound(){
    return (
        <Layout>
        <div className="w-full flex justify-center">
            <div className="max-w-7xl w-full flex h-[calc(100vh-324px)]">
                {/* 왼쪽 */}
                <div className="w-1/2 h-full flex flex-col justify-center space-y-8">
                    <h1 className="text-4xl font-bold">404 PAGE NOT FOUND</h1>
                    <h2 className="text-xl font-semibold">Hydra has stolen this page from the</h2>
                    <p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
                </div>
                {/* 오른쪽 */}
                <div className="w-1/2 h-full flex justify-center overflow-hidden">
                    <img className=" animate-scared" src={NotImage} alt="not_image" />
                </div>
            </div >
        </div>
        </Layout>
    )
}