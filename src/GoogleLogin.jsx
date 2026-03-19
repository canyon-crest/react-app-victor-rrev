import { useState, useEffect } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

function GoogleLogin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}

export default GoogleLogin;
