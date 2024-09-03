# create react app
# configured tailwind css from their docs
# header
# login from
# sign up form
# routin
# useref hooks
# validation  (using 2 js files which are in utils)
# firebbase set up 
#  Authentication purpose 
# Firebase set up in vs code
# Deploy the project on Firebase
# Finished sign-in and sign-up
# created the redux store
# Created the user icon
# created the sign out feature with firebase signout
# used useNavigate to navigate to different components from one place
# created dispatch method in login component after createwithemailandpassword 
#  sign in and sign up part completrely done with sign out also

#  BUG FIXES

->  we moved the useffect which was having the onauthstatechange to header as we wanted to fix the bug of users getting to browse page without login and removed all the navigate from other pages/components so it has to be routed from the header only
-> created a new constatnt file for hardcoded string data
-> created the return funcition in useeffect as onauthstatechange returns a unsubscribe function and we just called it to unsubscribe so that the useeffect does not overload each time the header is rendered and the useeffect is called each time 


# Features
   - LoGIN/Sign up
   -Browse(After login)
        - Header
        -Main Movie
               -Trailer
               -Title
               -Movue Suggestion
   - Netfllix GPT
       -Seacch Bar
       - Movie Suggestion 