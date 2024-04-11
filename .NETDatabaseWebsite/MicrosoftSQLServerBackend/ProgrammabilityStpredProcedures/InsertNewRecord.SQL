USE [Test]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertNewRecord]
    @Param1 VARCHAR(50),
    @Param2 VARCHAR(50),
    @Param3 VARCHAR(50)
AS
BEGIN
    INSERT INTO dbo.Cars(Car_Name, Car_Brand, Car_Status)
    VALUES (@Param1, @Param2, @Param3)
END
