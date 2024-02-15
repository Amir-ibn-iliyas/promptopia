import '@styles/globals.css';   
// import { Children } from 'react';/
export const metadata={
    tittle:'Promptapia',
    description:'Discover & Share AI Prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
    <body>
        <div className="main">
            <div className="gradient"/>
        </div>
    <main className="app">
        {children}
    </main>
    </body>
    </html>
  )
}

export default Rootlayout
