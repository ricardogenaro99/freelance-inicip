import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks";
import { PATHS } from "../../routes";
import { device, valuePx } from "../../utils/generalBreakpoints";
import BurgerComponent from "./BurgerComponent";
import DropdownItemMenu from "./DropdownItemMenu";
import NavLinkComponent from "./NavLinkComponent";

const Container = styled.header`
	* {
		transition: all var(--transition);
	}
	> div {
		background: var(--color-white-pure);
		height: var(--header-height);
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1000;

		display: flex;
		align-items: center;

		box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.15);

		.header {
			width: 100%;
			justify-content: space-between;
			padding: var(--padding-header);
			display: flex;
			align-items: center;
			section,
			nav {
				display: flex;
				align-items: center;
			}

			nav {
				gap: var(--gap-xxl);
				font-weight: 600;
			}

			section {
				.title-quena {
					font-size: var(--font-size-xxl);
					color: var(--color-primary);
					font-weight: 900;
				}
			}

			@media ${device.tabletL} {
				section {
					width: 100%;
					justify-content: space-between;
				}

				nav {
					position: absolute;
					top: var(--header-height);
					left: 0;
					background: var(--color-primary);
					display: flex;
					flex-direction: column;
					gap: 0;
					width: 100vw;
					height: calc(100vh - var(--header-height));
					transform: ${(props) =>
						props.openMenu ? "translateX(0)" : "translateX(150vw)"};
					color: var(--color-white);
					font-weight: 600;

					* {
						width: 100%;
					}
				}
			}
		}
	}
`;

function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const [watchMenu, setWatchMenu] = useState(false);

	const { widthWindow } = useWindowDimensions();

	const itemsNosotros = [
		{
			path: `${PATHS.nosotros.path}/${PATHS.nosotros.children.presentacion.path}`,
			anchor: "Presentación",
		},
		{
			path: `${PATHS.nosotros.path}/${PATHS.nosotros.children.equipo.path}`,
			anchor: "Equipo",
		},
	];

	const itemsInvestigaciones = [
		{
			path: `${PATHS.investigaciones.path}/${PATHS.investigaciones.children.publicaciones.path}`,
			anchor: "Publicaciones",
		},
	];

	useEffect(() => {
		if (widthWindow > valuePx.tabletL && watchMenu) {
			setWatchMenu(false);
		}
		if (widthWindow <= valuePx.tabletL && !watchMenu) {
			setWatchMenu(true);
		}
	}, [watchMenu, widthWindow]);

	useEffect(() => {
		if (!watchMenu) {
			setOpenMenu(false);
		}
	}, [watchMenu]);

	const handleClickMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<Container openMenu={openMenu}>
			<div>
				<div className="header">
					<section>
						<Link
							to="/"
							className="title-quena"
							onClick={() => setOpenMenu(false)}
						>
							LOGO
						</Link>
						{watchMenu && (
							<BurgerComponent onClick={handleClickMenu} openMenu={openMenu} />
						)}
					</section>
					<nav>
						<DropdownItemMenu
							dropdownTitle="Nosotros"
							items={itemsNosotros}
							onClickItem={handleClickMenu}
							openMenu={openMenu}
						/>
						<DropdownItemMenu
							dropdownTitle="Investigaciones"
							items={itemsInvestigaciones}
							onClickItem={handleClickMenu}
							openMenu={openMenu}
						/>
						<NavLinkComponent
							label="Contacto"
							onClick={handleClickMenu}
							openMenu={openMenu}
						/>
					</nav>
				</div>
			</div>
		</Container>
	);
}

export default Header;
