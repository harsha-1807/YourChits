import { Protect, auth } from '@clerk/nextjs';
import React from 'react'

function Admin() {
    const { userId } = auth();
  return (
    <Protect role='org:admin' fallback="Only Admin can access">

    <div>
         {userId === "user_2e2pZYrpYk7p55XIVG8OHnVbS6T" && (
           <h2>welcome Chief!</h2>
          )}
    </div>
    </Protect>
  )
}

export default Admin