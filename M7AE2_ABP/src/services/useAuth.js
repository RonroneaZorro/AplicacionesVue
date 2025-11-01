import { auth } from "@/firebase"; 
import { ref, computed } from "vue";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const user = ref(null);
const isReady = ref(false);
const error = ref('');

onAuthStateChanged (auth , (usuario) => {
    user.value = usuario;
    isReady.value = true;
})


export function useAuth () {
    const isAuthenticated = computed(() => user.value !== null);
    async function login(email, password) {
        error.value = '';
        try {
            const autenicacion = signInWithEmailAndPassword(auth, email, password);
            user.value = autenicacion.user;
        }
        catch (error) {
            error.value = 'Credenciales inválidas';
        }
    }
    async function logout() {
        await signOut(auth);
        user.value = null;
    }
    return {
        user,
        isAuthenticated,
        login,
        logout,
        error,
        isReady
    }
}
