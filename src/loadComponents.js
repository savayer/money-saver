import Vue from "vue";
import BaseLayout from "./components/layouts/BaseLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import EmptyLayout from "./components/layouts/EmptyLayout";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

export const components = [BaseLayout, AuthLayout, EmptyLayout, Navbar, Aside];

export default Vue;
