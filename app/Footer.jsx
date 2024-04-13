import Link from 'next/link'
export default function Footer() {

  return (
    <footer className="py-10 bg-black w-auto flex flex-col font-thin">
      <div className="text-white text-center text-sm">
        <div className="mx-auto">
            <Link href="/serviceagreement">Service Agreement</Link>
            <p>| Latawiec Design |</p>
            <p>| latawiecthomas@gmail.com |</p>
        </div>
      </div>
    </footer>
  )
}