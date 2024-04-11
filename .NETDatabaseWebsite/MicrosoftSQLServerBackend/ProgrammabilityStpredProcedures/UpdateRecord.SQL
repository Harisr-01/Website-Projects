USE [Test]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateRecord]
    @RecordID VARCHAR(50),
    @NewColumn1 VARCHAR(50),
    @NewColumn2 VARCHAR(50),
	@NewColumn3 VARCHAR(50)
AS
BEGIN
    UPDATE dbo.Cars
    SET Car_Name = @NewColumn1,
    Car_Brand = @NewColumn2,
	Car_Status = @NewColumn3
    WHERE Car_ID = @RecordID;
END
