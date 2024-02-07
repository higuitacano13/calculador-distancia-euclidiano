USE [PlanoCartesiano]
GO
/****** Object:  Table [dbo].[PlanoCartesiano]    Script Date: 7/02/2024 3:59:20 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PlanoCartesiano](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PuntoInicialX] [int] NOT NULL,
	[PuntoInicialY] [int] NOT NULL,
	[PuntoFinalX] [int] NOT NULL,
	[PuntoFinalY] [int] NOT NULL,
	[Distancia] [float] NULL,
	[FechaCalculo] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
