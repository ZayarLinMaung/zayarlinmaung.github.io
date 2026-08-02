export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {year} Zayar Lin Maung</p>
      <a href="#top">▲ CONTINUE?</a>
    </footer>
  )
}
