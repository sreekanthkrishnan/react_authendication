import React from "react";
import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import AppRouter from "./AppRouter";
import { IsAuthenticated } from "../utils/HelperFunctions";
import AuthRouter from "./AuthRouter";

function MainRouter() {
	return (
		<Container>
			<Routes>
				<Route
					path="/*"
					element={IsAuthenticated() ? <AppRouter /> : <AuthRouter />}
				/>
			</Routes>
		</Container>
	);
}

export default MainRouter;
const Container = styled.div``;
