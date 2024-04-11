USE [Test]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cars](
	[Car_Name] [varchar](50) NULL,
	[Car_Brand] [varchar](50) NULL,
	[Car_Status] [varchar](50) NULL,
	[Car_ID] [int] IDENTITY(1,1) PRIMARY KEY
);
GO
