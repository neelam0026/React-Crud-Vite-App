Set up React Application using Vite : Done
Setup Tailwind CSS
Continue to CRUD Application with Context
   - User Form : Name, Email, Age, Submit Button,
   - User List : List of Users with Delete Button
   - Table with user record
   - Edit & Delete record

+++++++++++++++++++++++++++++++++++++++++++

   Port: http://localhost:5173/
   
   +++++++++++++++++++++++++++++++++

   1. npm install
   2. npm run dev
   3. 

   Git commands:
   1. git add .
   2. git commit -m "Initial Commit"
   3. git push -u origin main
   4. git remote add origin "ssh url git@github.com"

   5. git branch -M main
   6. git remote -v     // check current remote URL
   7. git ls-remote // test connection 
   8. ssh -T git@github.com // test connection remote

// Generate an SSH key (if needed)


   1. ls ~/.ssh   // Check if you already have an SSH key
   2. ssh-add -l // list identities
   3.  ssh-keygen -t ed529 -C "email@gmail.com"
   4. cat ~/.ssh/id_ed25519.pub // add SSH key to hithub account

   Go to GitHub → Settings → SSH and GPG keys → New SSH key, and paste it there.

   5. ssh -T git@github.com


// Allow unrelated histories
git pull origin master --allow-unrelated-histories




