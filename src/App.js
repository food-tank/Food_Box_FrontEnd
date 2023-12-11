import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import SignIn from "./components/signIn/SignIn";
import SignInCheck from "./components/signInCheck/SignInCheck";
import NotFound from "./components/notFound/NotFound";
import Main from "./components/main/Main";
import ViewContent from "./components/viewContent/ViewContent";
import Oauth from "./components/oauth/Oauth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posting from "./components/posting/Posting";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signInCheck" element={<SignInCheck />} />
          <Route path="/ViewContent/:foodId" element={<ViewContent />} />
          <Route path="/Posting" element={<Posting />} />
          <Route path="/login/oauth2/code/google" element={<Oauth />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
