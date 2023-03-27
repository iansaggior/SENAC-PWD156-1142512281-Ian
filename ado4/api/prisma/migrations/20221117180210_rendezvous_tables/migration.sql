-- CreateTable
CREATE TABLE `users` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `nmUser` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profile` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comanda` (
    `idComanda` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroMesa` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `draft` VARCHAR(191) NOT NULL,
    `idUser` INTEGER NOT NULL,

    PRIMARY KEY (`idComanda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `itemComanda` (
    `idComanda` INTEGER NOT NULL,
    `idProduto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`idComanda`, `idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `idProduto` INTEGER NOT NULL AUTO_INCREMENT,
    `idCategoria` INTEGER NOT NULL,
    `nmProduto` VARCHAR(191) NOT NULL,
    `preco` VARCHAR(191) NOT NULL,
    `descProduto` VARCHAR(191) NOT NULL,
    `imgProduto` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `idCategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nmCategoria` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`idCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comanda` ADD CONSTRAINT `comanda_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itemComanda` ADD CONSTRAINT `itemComanda_idComanda_fkey` FOREIGN KEY (`idComanda`) REFERENCES `comanda`(`idComanda`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itemComanda` ADD CONSTRAINT `itemComanda_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `produto`(`idProduto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `categoria`(`idCategoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
