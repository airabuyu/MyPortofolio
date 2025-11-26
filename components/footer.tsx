export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Eric Jatmiko. All rights reserved.</p>
      </div>
    </footer>
  )
}

